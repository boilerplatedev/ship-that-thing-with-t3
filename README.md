# 🚀 Ship that Thing Boilerplate

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app` with some additional setup to make life easier.

- Login by Email Magic Link
- Custom NextAuth Pages (error, sign-in, sign-out, verify-request)
- Helpful `withAuth` and `withNoAuth` HOC's that any NextPage can be wrapped with to quickly lock/unlock any page.
  - `withNoAuth`: Used to make sure a logged in user can never go to these pages again. `src/pages/auth/sign-in` and `src/pages/auth/verify-request` are good examples.
  - `withAuth`: Used to make sure only logged in users can go to this page. `src/pages/auth/sign-out` is a good example.
- Sane Environment Variables + App level Config objects that use them to setup good defaults
- `Page` and `Container` layouts.
- `utils/cn`: a good helper utility that combines `clsx` and `tailwind-merge`.
- [Convential commit](https://www.conventionalcommits.org/en/v1.0.0/) messages are setup via `commitlint` and `commitizen`. All the setup is done. If your commit messages don't follow that convention, it won't let you commit. Feel free to use another convention.
  - A helper NPM script `commit` has been added. Running `npm run commit` or `yarn commit` will help you craft good commit messages.

> + All the other features offered by the `T3 Stack` setup.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
