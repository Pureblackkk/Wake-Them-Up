import cloneDeep from "lodash.clonedeep";

class CopyPasteHouse {
    static getInstance() {
        if(!this.instance) {
            this.instance = new CopyPasteHouse();
        }
        
        return this.instance;
    }

    constructor() {
        this.house = [];
        CopyPasteHouse.instance = this;
    }

    static set package(obj) {
        this.house = [];

        if (obj instanceof Array) {
            for (let item of obj) {
                this.house.push(cloneDeep(item));
            }
        } else {
            this.house.push(cloneDeep(obj));
        }
    }

    static get package() {
        return cloneDeep(this.house);
    }
}

export { CopyPasteHouse };