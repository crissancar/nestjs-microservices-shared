import { EventPayload } from '../../shared/interfaces/event-payload.interface';
import { FindRawUserByOptionsRequestInterface } from './find-raw-user-by-options-request.interface';

export interface FindRawUserByOptionsPayload
	extends EventPayload<FindRawUserByOptionsRequestInterface> {}
