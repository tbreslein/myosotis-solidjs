# Myosotis

Collaborative ToDo app, that allows multiple users to sync up a ToDo list between them.

## building the app

To build the app on your own, you will need `node`.
I have not tested building it with a `node` version other than 16.6, so that at your own risk.
You will also need some sort of emulator, though I have only tested it with android emulators because I'm not planning to put this on iOS.
It is wired up to run on android studio emulators currently, so you need to have that installed along with at least one integrated emulator.

With that, you can run:

```bash
npm i # install dependencies
npx cap add android # add the android integration
npm run build:dev # initial build
npm run dev:android # run the android dev environment
```

## Dependencies

- [SolidJS](https://svelte.dev/): The underlying framework to build components
- [Typescript](https://www.typescriptlang.org/): Handles logic, integrated with `SolidJS`
- [vite](https://vitejs.dev/): Bundling
- [Capacitor](https://capacitorjs.com): building the app into an android app
- [solid-router](https://github.com/solidjs/solid-router): Routing
- [SUID](https://suid.io/): SolidJS material UI
- [solid-toast](https://www.solid-toast.com/): Toasts for SolidJS
- [axios](https://github.com/axios/axios): HTTP client
- [Zod](https://github.com/colinhacks/zod): typescript-first schema validation
- [Vitest](https://vitest.dev/): testing framework for vite apps
- [Flipper](https://fbflipper.com/): Debugger
- [Appium](https://appium.io/): End2End testing framework for native, hybrid and mobile web apps

## TODO

- [ ] build a simple ToDo app
  - [ ] declare the ToDo item class
  - [ ] display a dummy todo
  - [ ] declare the ToDo list class
  - [ ] display a dummy todo list
  - [ ] make it possible to add ToDos
  - [ ] make it possible to remove ToDos
  - [ ] make it possible to tick off ToDos
- [ ] add some additional functionality to ToDos
  - [ ] add deadlines to the ToDo items
  - [ ] add tags to the ToDo items
  - [ ] add a history for ToDos
  - [ ] add filters for the ToDo list (for deadlines, whether it's completed or not, deadline range, tags)
  - [ ] add additional types of ToDo items (one-shots, recurring, maybe more?)
  - [ ] add those types to the filters
- [ ] use the [mui theme creator](https://bareynol.github.io/mui-theme-creator/) to create themes
- [ ] add "users" & assigning ToDo items to users
  - [ ] add users to filters
  - [ ] add households
- [ ] add the backend?

## License

The Myosotis code is licensed under the `BSD-3` license:

```
Copyright 2022 Tommy Breslein

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

Assets are licensed under a [Creative Commons Attribution-NonCommercial-NoDerivates 4.0 International License](http://creativecommons.org/licenses/by-nc-nd/4.0/).
