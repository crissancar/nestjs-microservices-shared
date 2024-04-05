import { FindUserByIdRequestInterface } from './find-user-by-id-request.interface';

export class FindUsersByCriteriaResponseInterface {
	data: Array<FindUserByIdRequestInterface>;

	count: number;

	currentCount: number;

	take: number;

	page: number;
}
