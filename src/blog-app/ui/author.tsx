// import { faker } from "@faker-js/faker";
import Image from "next/image";
import { Users } from "../context/filterContext";

// export function createRandomUser() {
//   return {
//     firstName: faker.person.firstName(),
//     lastName: faker.person.lastName(),
//     avatar: faker.image.avatar(),

//     registeredAt: faker.date.past(),
//   };
// }

export default function Author({ author }: { author?: Users }) {
  if (!author) return;

  const month = author.registeredAt.toLocaleString("en", { month: "short" });
  const day = author.registeredAt.getDate();
  const year = author.registeredAt.getFullYear();

  return (
    <div className="my-4 flex w-[200px] min-w-fit items-center gap-2">
      <div className="w-[50px]">
        <Image
          className="rounded-full"
          src={author.avatar}
          width={100}
          height={100}
          alt=""
        />
      </div>
      <div>
        <p className="font-bold text-textSecondary">{`${author.firstName} ${author.lastName}`}</p>
        <p className="font-semibold text-textPrimary">{`${month} ${day}, ${year}`}</p>
      </div>
    </div>
  );
}

// export default function Author({ author }: { author?: Users }) {
//   const { firstName, lastName, avatar, registeredAt } = createRandomUser();
//   console.log(author);
//   const month = registeredAt.toLocaleString("en", { month: "short" });
//   const day = registeredAt.getDate();
//   const year = registeredAt.getFullYear();

//   return (
//     <div className="my-4 flex w-[200px] min-w-fit items-center gap-2">
//       <div className="w-[50px]">
//         <Image
//           className="rounded-full"
//           src={avatar}
//           width={100}
//           height={100}
//           alt=""
//         />
//       </div>
//       <div>
//         <p className="font-bold text-textSecondary">{`${firstName} ${lastName}`}</p>
//         <p className="font-semibold text-textPrimary">{`${month} ${day}, ${year}`}</p>
//       </div>
//     </div>
//   );
// }
