import NoteType from './NoteType';

interface INote {
  id: number;
  type: NoteType;
  name: string;
  url?: string;
  desc: string;
}

export default INote;
