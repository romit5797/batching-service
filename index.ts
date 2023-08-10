import { userLoader } from "./batcher";

(async () => {
  const requests = ["jesse", "drew", "martin"];
  const promises = requests.map((e) => userLoader.load(e));
  const isFulfilled = <T>(
    p: PromiseSettledResult<T>
  ): p is PromiseFulfilledResult<T> => p.status === "fulfilled";

  const results = await Promise.allSettled(promises);
  const data = results.filter(
    (res) => res.status === "fulfilled"
  ) as PromiseFulfilledResult<any>[];

  for (const val of data) {
    console.log(`User was invited by -> ${JSON.stringify(val.value, null, 2)}`);
  }
})();
