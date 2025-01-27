import { faker } from "@faker-js/faker";
import Image from "next/image";

export function createRandomUser() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    avatar: faker.image.avatar(),

    registeredAt: faker.date.past(),
  };
}

export default function Author() {
  const { firstName, lastName, avatar, registeredAt } = createRandomUser();

  const month = registeredAt.toLocaleString("en", { month: "short" });
  const day = registeredAt.getDate();
  const year = registeredAt.getFullYear();

  return (
    <div className="my-4 flex md:w-[200px]  w-fit min-w-fit items-center gap-2">
      <div className="w-[50px]">
        <Image
          className="rounded-full"
          src={avatar}
          width={100}
          height={100}
          alt=""
        />
      </div>
      <div className="max-md:text-center">
        <p className="font-bold text-textSecondary">{`${firstName} ${lastName}`}</p>
        <p className="font-semibold text-textPrimary">{`${month} ${day}, ${year}`}</p>
      </div>
    </div>
  );
}
