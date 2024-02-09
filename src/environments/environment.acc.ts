import { Service } from "../app/core/enum";
import { accRoutes } from "../app/feature/acc/acc.routing";

export const environment = {
  service: Service.ACC,
  routes: accRoutes
};
