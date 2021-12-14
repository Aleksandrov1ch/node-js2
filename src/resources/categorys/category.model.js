const { v4: uuid } = require('uuid');

class Category {
    constructor({ id = uuid(),
                    menuId='null',
                    title = 'BOARD',
                    photo = `photo.png`,
                    isVisible=true,
                } = {}) {
        this.id = id;
        this.menuId = menuId;
        this.title = title;
        this.photo = photo;
        this.isVisible = isVisible;
        const { id, title, photo, isVisible} = category;
        return { id, title, photo, isVisible};
        const { id, menuId, title, photo, isVisible} = category;
        return { id, menuId, title, photo, isVisible};
    }
}

module.exports = Category;
