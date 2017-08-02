var Tm = Tm || {};

Tm.StorageProvider = (function() {
    var self = {};

    self.Store = function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };

    self.Retrieve = function(key) {
        var value = localStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        }

        if (this.Default) {
            return this.Default;
        }

        return null;
    };

    var pub = function(key, defaultValue) {
        this.Key = key;
        this.Default = defaultValue;
    };

    pub.prototype.Store = function(value) {
        self.Store(this.Key, value);
    };

    pub.prototype.Retrieve = function() {
        return self.Retrieve(this.Key);
    };

    return pub;
})(jQuery);