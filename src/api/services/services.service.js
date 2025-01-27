export function getAllPrimaryServices(axios) {
  return async () => {
    const { data } = await axios.get("/primary-service.json");
    if (!data?.status) {
      throw new Error(data?.message);
    }
    return data?.data;
  };
}

export function getAllServices(axios) {
  return async () => {
    const { data } = await axios.get("/service.json");
    if (!data?.status) {
      throw new Error(data?.message);
    }
    return data?.data;
  };
}
