module pseTrader.models {
    "use strict";

    export class Violation {
        private _description: string;
        private _id: number;
        private _checked: boolean;

        constructor(id: number, description: string, checked: boolean) {
            this._description = description;
            this._id = id;
            this._checked = checked;
        }

        get description(): string {
            return this._description;
        }
        set description(description: string) {
            this._description = description;
        }

        get id(): number {
            return this._id;
        }
        set id(id: number) {
            this._id = id;
        }

        get checked(): boolean {
            return this._checked;
        }
        set checked(checked: boolean) {
            this._checked = checked;
        }
    }
}
