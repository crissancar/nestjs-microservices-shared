import { FindOptionsWhere } from 'typeorm';

import { SortColumn } from '../../../webapp/shared/types/sort-column.type';
import { SortOrder } from '../../../webapp/shared/types/sort-order.type';

export interface CriteriaQuery<T> {
	where: FindOptionsWhere<T>;
	take: number;
	page: number;
	skip: number;
	sortColumn: SortColumn<T>;
	sortOrder: SortOrder;
}
