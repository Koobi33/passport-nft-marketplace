import {
  CREATE_ENTITY,
  GET_COLLECTION,
  GET_COLLECTIONS_LIST,
  PARTICIPATE,
} from "../../utils/constants/index";

const entities = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    if (body.type === CREATE_ENTITY) {
      if (entities.some((el) => el.title === body.data.title)) {
        return res.status(403).send("Title should be unique!");
      }
      entities.push(body.data);
      return res.status(200).send();
    }
    if (body.type === GET_COLLECTIONS_LIST) {
      return res.status(200).json(entities);
    }
    if (body.type === GET_COLLECTION) {
      const entity = entities.filter(
        (el) => el.itemUrl === body.requestedTitle
      );
      if (entity.length !== 1) {
        return res.status(404).send();
      }
      return res.status(200).json(entity[0]);
    }
    if (body.type === PARTICIPATE) {
      const entityArr = entities.filter((el) => el.title === body.itemTitle);
      const address = body.address;
      const passport = body.passport;
      let entity;
      if (entityArr[0]) {
        entity = entityArr[0];
        if (address) {
          const userStamps = passport.stamps;
          if (
            entity.reqStamps.every((el) =>
              userStamps.some((elem) => elem.provider === el.title)
            )
          ) {
            return res.status(200).send();
          }
        }
      }
      return res.status(403).send();
    }
  }
}
