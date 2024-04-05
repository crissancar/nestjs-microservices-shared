import { FindUsersByCriteriaRequestInterface } from '../../../webapp/users/interfaces/find-users-by-criteria-request.interface';
import { EventPayload } from '../../shared/interfaces/event-payload.interface';

export interface FindUsersByCriteriaPayload
	extends EventPayload<FindUsersByCriteriaRequestInterface> {}
