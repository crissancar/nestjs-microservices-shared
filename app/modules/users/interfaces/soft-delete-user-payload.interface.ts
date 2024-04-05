import { SoftDeleteUserRequestInterface } from '../../../webapp/users/interfaces/soft-delete-user-request.interface';
import { EventPayload } from '../../shared/interfaces/event-payload.interface';

export interface SoftDeleteUserPayload extends EventPayload<SoftDeleteUserRequestInterface> {}
