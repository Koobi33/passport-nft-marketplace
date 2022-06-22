import {
  API_ADDRESS,
  CREATE_ENTITY,
  CUSTOM,
  DEFAULT,
  DEFAULT_CHECKS,
  GET_COLLECTION,
  GET_COLLECTIONS_LIST,
  PARTICIPATE,
} from "../constants";

export function fetchCollections(requestedTitle) {
  return fetch(API_ADDRESS, {
    method: "POST",
    body: JSON.stringify({
      type: GET_COLLECTION,
      requestedTitle,
    }),
  });
}

export function callParticipation({ itemTitle, address, passport }) {
  return fetch(API_ADDRESS, {
    method: "POST",
    body: JSON.stringify({
      type: PARTICIPATE,
      itemTitle,
      address,
      passport,
    }),
  });
}

export function createEntity({
  title,
  itemUrl,
  description,
  imgBase64,
  checkType,
  reqStamps,
}) {
  return fetch(API_ADDRESS, {
    method: "POST",
    body: JSON.stringify({
      type: CREATE_ENTITY,
      data: {
        title,
        itemUrl,
        description,
        imgBase64,
        checkType,
        reqStamps,
      },
    }),
  });
}

export function getCollections() {
  return fetch("/api/handle", {
    method: "POST",
    body: JSON.stringify({ type: GET_COLLECTIONS_LIST }),
  });
}
