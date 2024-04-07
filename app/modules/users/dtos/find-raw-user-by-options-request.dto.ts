import { Exact } from '../../shared/types/exact.type';
import { FindByOptions } from '../../shared/types/find-by-options.type';
import { FindRawUserByOptionsRequestInterface } from '../interfaces/find-raw-user-by-options-request.interface';
import { User } from '../models/user.model';

export class FindRawUserByOptionsRequest
	implements Exact<FindRawUserByOptionsRequestInterface, FindRawUserByOptionsRequest>
{
	readonly correlation: never;

	readonly options: FindByOptions<User>;

	constructor(options: FindByOptions<User>, correlation: never) {
		this.options = options;
		this.correlation = correlation;
	}

	static create(options: FindByOptions<User>, correlation: string): FindRawUserByOptionsRequest {
		return new FindRawUserByOptionsRequest(options, correlation as never);
	}
}
