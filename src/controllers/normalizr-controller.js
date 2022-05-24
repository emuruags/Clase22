import { normalize, schema } from 'normalizr';

const authorsSchema = new schema.Entity('authors');
const msjSchema = new schema.Entity('messages', { author: authorsSchema }, { idAttribute: 'id' });
const fileSchema = [msjSchema]

const normalizeMessage = (msj) => {
const normalizedMessage = normalize(msj, fileSchema);
return normalizedMessage;
}

export { normalizeMessage };
