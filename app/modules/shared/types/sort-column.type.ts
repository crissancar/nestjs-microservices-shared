import { TimestampEntity } from '../../../microservices/shared/persistence/timestamp.entity';

export type SortColumn<T> = keyof T | keyof TimestampEntity;
