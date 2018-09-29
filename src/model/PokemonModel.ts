export class PokemonModel{
    private _id: number;
    private _name: string;
    private _height: string;
    private _weight: string;
    private _attaque: number;
    private _defense: number;
    private _hp: number;
    private _speed: number;
    private _attaqueSpecial: number;
    private _defenseSpecial: number;
    private _frontImage: string;


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter height
     * @return {string}
     */
	public get height(): string {
		return this._height;
	}

    /**
     * Getter weight
     * @return {string}
     */
	public get weight(): string {
		return this._weight;
	}

    /**
     * Getter attaque
     * @return {number}
     */
	public get attaque(): number {
		return this._attaque;
	}

    /**
     * Getter defense
     * @return {number}
     */
	public get defense(): number {
		return this._defense;
	}

    /**
     * Getter hp
     * @return {number}
     */
	public get hp(): number {
		return this._hp;
	}

    /**
     * Getter speed
     * @return {number}
     */
	public get speed(): number {
		return this._speed;
	}

    /**
     * Getter attaqueSpecial
     * @return {number}
     */
	public get attaqueSpecial(): number {
		return this._attaqueSpecial;
	}

    /**
     * Getter defenseSpecial
     * @return {number}
     */
	public get defenseSpecial(): number {
		return this._defenseSpecial;
	}

    /**
     * Getter frontImage
     * @return {string}
     */
	public get frontImage(): string {
		return this._frontImage;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter height
     * @param {string} value
     */
	public set height(value: string) {
		this._height = value;
	}

    /**
     * Setter weight
     * @param {string} value
     */
	public set weight(value: string) {
		this._weight = value;
	}

    /**
     * Setter attaque
     * @param {number} value
     */
	public set attaque(value: number) {
		this._attaque = value;
	}

    /**
     * Setter defense
     * @param {number} value
     */
	public set defense(value: number) {
		this._defense = value;
	}

    /**
     * Setter hp
     * @param {number} value
     */
	public set hp(value: number) {
		this._hp = value;
	}

    /**
     * Setter speed
     * @param {number} value
     */
	public set speed(value: number) {
		this._speed = value;
	}

    /**
     * Setter attaqueSpecial
     * @param {number} value
     */
	public set attaqueSpecial(value: number) {
		this._attaqueSpecial = value;
	}

    /**
     * Setter defenseSpecial
     * @param {number} value
     */
	public set defenseSpecial(value: number) {
		this._defenseSpecial = value;
	}

    /**
     * Setter frontImage
     * @param {string} value
     */
	public set frontImage(value: string) {
		this._frontImage = value;
	}
}