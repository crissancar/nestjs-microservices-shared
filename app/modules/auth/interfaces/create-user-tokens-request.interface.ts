import { AuthenticatedUser } from '../dtos/authenticated-user.dto';

export interface CreateUserTokensRequestInterface {
	authUser: AuthenticatedUser;
}
