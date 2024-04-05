import { User } from '../../../webapp/users/models/user.model';
import { FindByOptions } from '../../shared/types/find-by-options.type';

export class FindRawUserByOptionsRequestInterface {
	options: FindByOptions<User>;
}
