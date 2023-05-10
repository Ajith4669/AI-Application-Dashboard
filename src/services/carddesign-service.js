import { rootUrl } from "../helpers/url";
import CrudService from "./crud-service";

class CardDesignService extends CrudService {
  url = `${rootUrl}/`;
}
export default CardDesignService;
