import { EventPayload } from '../../shared/interfaces/event-payload.interface';
import { FindUserByIdRequestInterface } from './find-user-by-id-request.interface';

export interface FindUserByIdPayload extends EventPayload<FindUserByIdRequestInterface> {}
