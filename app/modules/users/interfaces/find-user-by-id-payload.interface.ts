import { FindUserByIdRequestInterface } from '../../../webapp/users/interfaces/find-user-by-id-request.interface';
import { EventPayload } from '../../shared/interfaces/event-payload.interface';

export interface FindUserByIdPayload extends EventPayload<FindUserByIdRequestInterface> {}
