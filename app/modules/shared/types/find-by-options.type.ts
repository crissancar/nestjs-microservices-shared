export type FindByOptions<T> = {
	key: keyof T;
	value: T[keyof T];
	columns?: Array<keyof T>;
};
