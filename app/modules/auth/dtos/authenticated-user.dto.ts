import { UserAudiences } from '../../../webapp/users/enums/user-audiences.enum';

export class AuthenticatedUser {
	readonly correlation: never;

	readonly id: string;

	readonly name: string;

	readonly email: string;

	readonly audiences: Array<UserAudiences>;
}
