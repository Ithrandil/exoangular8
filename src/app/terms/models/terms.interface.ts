export interface Terms {
  id: string;
  text: string;
  title: string;
  version: string;
  entityName: string;
  type: string;
  status: string;
  shouldNotifyUser: boolean;
  creationDate: string;
  modificationDate: string | null;
  publicationDate: string | null;
}
