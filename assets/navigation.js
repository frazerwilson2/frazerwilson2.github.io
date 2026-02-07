const loadInImg = (id) => {
        fetch(`https://cdn.contentful.com/spaces/fdyzdyn8c696/environments/master/assets/${id}?access_token=EQNUJXNxFK8Q7DBt9nDdooF7PEqvgt5VE0AW4y5DtjA`)
        .then(response => response.json())
        .then(asset => {
          const url = asset.fields.file.url;
          const alt = asset.fields.title || '';
          const imgElement = document.querySelector(`img[data-id="${id}"]`);
          imgElement.src = url;
          imgElement.alt = alt;
        });
    };

const options = {
  renderMark: {
    ['bold']: (text) => `<strong>${text}</strong>`,
    ['code']: (text) => {
      const esc = String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
      return `<pre>${esc}</pre>`;
    },
  },
  renderNode: {
    ['paragraph']: (node, next) =>
      `<p>${next(node.content)}</p>`,
    ['text']: (node, next) =>
      `<p>${next(node.content)}</p>`,
    ['embedded-asset-block']: (node) => {
        loadInImg(node.data.target.sys.id);
        return `<img src="#" alt="" data-id="${node.data.target.sys.id}" />`;
    },
  },
};

    const getArticle = (id) => {
        fetch(`https://cdn.contentful.com/spaces/fdyzdyn8c696/environments/master/entries/${id}?access_token=EQNUJXNxFK8Q7DBt9nDdooF7PEqvgt5VE0AW4y5DtjA`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                const title = data.fields.title || 'No Title';
                // console.log(data.fields.content);
                
                const body = documentToHtmlString(data.fields.content, options) || 'No Content';
                document.getElementById('post-inner-content').innerHTML = `<h1>${title}</h1>${body}`;
                window.location.hash = `#${id}`;
                document.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const href = link.getAttribute('href');
                        if(href.startsWith('#')) {
                            const postId = href.substring(1);
                            getArticle(postId);
                        } else {
                            window.open(href, '_blank');
                        }
                    });
                  });
            });

            if (!document.startViewTransition) {
              document.getElementById('post-content').classList.remove('hidden');
              document.getElementById('posts').classList.add('hidden');
            } else {
              document.startViewTransition(() => {
                document.getElementById('post-content').classList.remove('hidden');
                document.getElementById('posts').classList.add('hidden');
              });
            }
    }
    
    fetch('https://cdn.contentful.com/spaces/fdyzdyn8c696/environments/master/entries?access_token=EQNUJXNxFK8Q7DBt9nDdooF7PEqvgt5VE0AW4y5DtjA')
      .then(response => response.json())
      .then(data => {
          const posts = data.items.map(item => {
            console.log(item);
            
          const title = item.fields.title || 'No Title';
          return `<article data-id="${item.sys.id}">
            <h2 class="heading"><span class="highlight">🌟</span><span class="title">${title}</span></h2>
            <div class="meta">
              <div class="created-date">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <em>${item.sys.createdAt.substring(0, 10)}</em>
              </div>
              <span class="flavour-${item.fields.flavour.toLowerCase()}">✿ ${item.fields.flavour}</span>
              <span class="category category-${item.fields.category.toLowerCase()}">${item.fields.category}</span>
            </div>
            <p>${item.fields.intro}</p>
            <div class="tags">${item.fields.tags.split(',').map(tag => `<span class="tag">${tag}</span>`).join(' ')}</div>
            <div class="read-more">>>> Read more</div>
          </article>`;
        }).join('');
        document.getElementById('posts').innerHTML = posts;
        document.querySelectorAll('.posts article').forEach(article => {
            article.addEventListener('click', (e) => {
                let postId = e.currentTarget.getAttribute('data-id');
                if(!postId) {
                    while(!postId) {
                        e.currentTarget = e.currentTarget.parentElement;
                        postId = e.currentTarget.getAttribute('data-id');
                    }
                }
                getArticle(postId);
            });
        });
        const hash = window.location.hash;
        if(hash) {
            const postId = hash.substring(1);
            getArticle(postId);
        }
      });

    document.getElementById('back-to-posts').addEventListener('click', () => {
        if (!document.startViewTransition) {
          document.getElementById('post-content').classList.add('hidden');
          document.getElementById('posts').classList.remove('hidden');
          window.location.hash = '';
        } else {
          document.startViewTransition(() => {
            document.getElementById('post-content').classList.add('hidden');
            document.getElementById('posts').classList.remove('hidden');
            window.location.hash = '';
          });
        }
    });