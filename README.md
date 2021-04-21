# Next Events

## Getting started

### Install

1. `yarn` - install necessary dependencies

### Developing environment
You can start local:
1. `yarn start` - starts at port 3000

### Production environment
1. `yarn build` - starts at port 3000


## Code Guidelines

1. Branch from **develop**, name your new branch feature or ticket name related. Upon finishing the feature create MR to develop.
2. Organize folder structure in the following way

```
    -> Component
        -> Component
        -> Component
            -> Component.tsx
            -> style.tsx

```

3. Import defaults as you name them

```tsx
//Do
import MenuHeader from "./MenuHeader/MenuHeader";

//Don't
import H from "./MenuHeader/MenuHeader";
import Header from "./MenuHeader/MenuHeader";
```

4. Import styles in the following way

```tsx
import { Comonent } from "./style";

import classes from "./Component.module.css"
```

5. Name your classes and ids in the following way

```css
.class-name {
    ...
```

7. Organize imports. First import modules, utility functions, other components, than styles

```tsx
    import { FC } from 'react'

    import { helper } from '@/util/helper'

    import { Component1 } from '@/components/UI'
    import Component2 from '@/components/Component1/Component1'
    import Component3 from '@/components/Component2/Component2'

    import classes from './Component.module.css'

    export interface ComponentProps {
      ...
    }

    const Component:FC<ComponentProps> = props => {
        ...
```
