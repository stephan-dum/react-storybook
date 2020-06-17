const getObservable = (context: any, watch: string | string[]) => {
  return (
    Array.isArray(watch)
      ? watch
      : [watch]
  ).map((rawNamespace) => {
    const namespace = (
      Array.isArray(rawNamespace)
        ? rawNamespace
        : rawNamespace.split(".")
    );

    let current: any = context;

    for (let index = 0; current && index < namespace.length; index++) {
      current = current[namespace[index]];
    }

    return current;
  });
};

export default getObservable;
