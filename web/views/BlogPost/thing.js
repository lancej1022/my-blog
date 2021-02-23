[
  {
    _key: '6593926d1057',
    _type: 'block',
    children: [
      {
        _key: '6f39c05998ff',
        _type: 'span',
        marks: [],
        text:
          'I was talking with some friends about React performance and eventually a question came up that led me down a rabbit hole:\n\n',
      },
      {
        _key: '6a2df811e53c',
        _type: 'span',
        marks: ['strong'],
        text: 'Why not wrap all of your components in React.memo()?',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: 'aecef3cafdf9',
    _type: 'block',
    children: [
      {
        _key: '8155fef696d0',
        _type: 'span',
        marks: [],
        text:
          "If you're not familiar with `React.memo`, it's a higher order component (HOC) that wraps your custom component and attempts to reduce rerendering by checking the props being passed to the component. If a rerender is triggered by a parent component, the memo HOC will check whether the props being passed into the wrapped component have changed or not. If it detects that the props have not changed, then it does not bother rerendering the wrapped component and instead returns the last rendered result.",
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: 'dd5afd9a39d8',
    _type: 'block',
    children: [
      {
        _key: '15321f3573cd',
        _type: 'span',
        marks: [],
        text:
          "The nice thing is that it only checks props being passed into it from a parent component -- it doesn't prevent rerenders caused by changes in internal state or context values.",
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '61661be8db28',
    _type: 'block',
    children: [
      {
        _key: 'e505fea83d08',
        _type: 'span',
        marks: [],
        text: 'So this sounds like an easy win, right? ',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '40ec01f2e2fd',
    _type: 'block',
    children: [
      {
        _key: 'b504d841cf05',
        _type: 'span',
        marks: [],
        text:
          "If the props we're receiving are the same, then why would we want to rerender? And if the props we receive are different, then we still rerender properly, so what's not to love?",
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '6d42b3b6b038',
    _type: 'block',
    children: [
      {
        _key: '55c792f55238',
        _type: 'span',
        marks: [],
        text:
          'And this is something me and my friends wondered for a bit. This behavior sounds awesome, so why not make it the default behavior of React?',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '7c7f25008a9b',
    _type: 'block',
    children: [{ _key: '8e040f367e05', _type: 'span', marks: [], text: 'Well...' }],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: 'f6a98f97257e',
    _type: 'block',
    children: [
      {
        _key: 'b55c6663e004',
        _type: 'span',
        marks: [],
        text: 'React.memo fails under a lot of unexpected conditions',
      },
    ],
    markDefs: [],
    style: 'h2',
  },
  {
    _key: '0eb4404ecb82',
    _type: 'block',
    children: [
      { _key: 'c43d0781327b', _type: 'span', marks: [], text: 'According to the ' },
      {
        _key: '834c05312cc6',
        _type: 'span',
        marks: ['008c2b5b69ad'],
        text: 'React docs',
      },
      {
        _key: '2fa82ba631c8',
        _type: 'span',
        marks: [],
        text:
          ', React.memo\'s default behavior "... will only shallowly compare complex objects in the props object. If you want control over the comparison, you can also provide a custom comparison function as the second argument."',
      },
    ],
    markDefs: [
      {
        _key: '008c2b5b69ad',
        _type: 'link',
        href: 'https://reactjs.org/docs/react-api.html#reactmemo',
      },
    ],
    style: 'normal',
  },
  {
    _key: '555784f9c68e',
    _type: 'block',
    children: [
      {
        _key: '0e0b053a5314',
        _type: 'span',
        marks: [],
        text: 'The key here is that we are only doing a ',
      },
      { _key: '61239815060d', _type: 'span', marks: ['strong'], text: 'shallow' },
      {
        _key: '4defca66cd36',
        _type: 'span',
        marks: [],
        text:
          ' comparison. So if we have a component that accepts a prop called `title` that is a string, and that string value changes for whatever reason, then the memo HOC will compare the old `title` against the new one and properly determine that it is different, and trigger a rerender.',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '0df14bf04926',
    _type: 'block',
    children: [
      {
        _key: 'ecfff48ea527',
        _type: 'span',
        marks: [],
        text:
          'But what happens if our component also accepts a prop `handleChange` that is a callback function?',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '786e3d49debd',
    _type: 'block',
    children: [
      {
        _key: '92ae27d76b95',
        _type: 'span',
        marks: [],
        text: 'A brief detour into JavaScript comparisons...',
      },
    ],
    markDefs: [],
    style: 'h3',
  },
  {
    _key: 'b11d75301511',
    _type: 'block',
    children: [
      {
        _key: '71156199b546',
        _type: 'span',
        marks: [],
        text:
          "In case you're not overly familiar with JavaScript, data can be categorized into two categories: primitives values (strings, numbers, booleans) and references values (Objects, Arrays, Functions, and pretty much anything that ",
      },
      { _key: 'ac106920ca72', _type: 'span', marks: ['em'], text: "isn't " },
      { _key: '69185344feff', _type: 'span', marks: [], text: 'a primitive). ' },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: 'fee0dde322fd',
    _type: 'block',
    children: [
      {
        _key: '4d76f143fc85',
        _type: 'span',
        marks: [],
        text:
          'These two categories get compared differently. When comparing one primitive against another primitive of the same type, JavaScript will check whether they have the exact same value. So if the string `breakfast` has a value of "pancakes" and the string `lunch` also has the value "pancakes" then comparing them with something like `breakfast === lunch` will result in a `true` value. ',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '29d3ea2104fc',
    _type: 'block',
    children: [
      {
        _key: '8b0c793d22e4',
        _type: 'span',
        marks: [],
        text:
          'However, when we compare reference values against each other, they are compared based on their location in memory, not their underlying values. So if we define an object like so:',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: 'fe4aa6b60c7f',
    _type: 'block',
    children: [{ _key: 'b65b032e5db8', _type: 'span', marks: [], text: '' }],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '4baec6b1325f',
    _type: 'code',
    code: 'const myFriend = {\n  name: "David", \n  senseOfFashion: "mediocre"\n}',
    filename: 'sampleObject',
    language: 'javascript',
  },
  {
    _key: 'f2714d0818e7',
    _type: 'block',
    children: [
      {
        _key: 'bacfd004dae6',
        _type: 'span',
        marks: [],
        text:
          '... and then elsewhere within our code we define a seemingly identical object:',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: 'fb07a0e96015',
    _type: 'block',
    children: [{ _key: '7c716578c04e', _type: 'span', marks: [], text: '' }],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '6d5be6ae22dd',
    _type: 'code',
    code:
      'const totallyDifferentPerson = {\n  name: "David",\n  senseOfFashion: "mediocre"\n}',
    filename: 'similarObj.js',
    language: 'javascript',
  },
  {
    _key: '921d87311768',
    _type: 'block',
    children: [
      {
        _key: '6552f354cac3',
        _type: 'span',
        marks: [],
        text:
          'when we compare `myFriend === yourFriend` the JavaScript engine will actually return a `false` value despite the fact that these two objects appear to have identical entries.',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '3239ac644cfa',
    _type: 'block',
    children: [
      {
        _key: '0882ff7927b1',
        _type: 'span',
        marks: [],
        text:
          "The reason we receive false is that these two objects live in different parts of our computer's memory. Conversely, if we had a component that received two props `friend` and `family` but passed our `myFriend` object as the value for both of those props, then when we compared `friend` and `family` the JS engine should return `true` since we've basically passed the same location in memory as both arguments, and so JS can see that both props actually point to the same spot in memory.",
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: 'bac439cf4ea2',
    _type: 'block',
    children: [
      {
        _key: '1e30ee8c5143',
        _type: 'span',
        marks: [],
        text:
          'There are open source tools out there that do allow you to compare two different objects and see whether the entries within the entry are the same, rather than simply comparing the two addresses in memory, but the point is that such comparisons are not the default behavior of the JS engine. ',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: 'ff3549dd441b',
    _type: 'block',
    children: [
      {
        _key: '28fa0e711d2f',
        _type: 'span',
        marks: [],
        text:
          "Thus far I've used an Object as part of the demonstration, but the same result will apply to any non-primitive value.",
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '95bc7920b996',
    _type: 'block',
    children: [
      {
        _key: '82becbce22a0',
        _type: 'span',
        marks: [],
        text: 'Back to our question about passing a callback function...',
      },
    ],
    markDefs: [],
    style: 'h3',
  },
  {
    _key: '1bc61ff64176',
    _type: 'block',
    children: [
      {
        _key: 'a779a24642ec',
        _type: 'span',
        marks: [],
        text:
          'When React says it does a "shallow comparison" as part of React.memo, it means that if it receives a callback function as one of the props, even if the actual code for that function has not changed, if the function was ',
      },
      { _key: 'f515b6e16144', _type: 'span', marks: ['em'], text: 'redefined' },
      {
        _key: '1a337a540232',
        _type: 'span',
        marks: [],
        text:
          ' (which will happen if the function is being defined in some parent component and then prop drilled into our child component) then the function will always have a new place in memory. As a result, React.memo will always wind up rerendering our component, making the extra work to memoize the component nothing more than unnecessary overhead.',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: 'afcecf5603e0',
    _type: 'block',
    children: [
      {
        _key: '014c0cbd0db8',
        _type: 'span',
        marks: [],
        text: 'Keep in mind that our memoization will fail for ',
      },
      { _key: 'fe49ab2e73af', _type: 'span', marks: ['em'], text: 'any' },
      {
        _key: 'd9763c146810',
        _type: 'span',
        marks: [],
        text:
          ' non-primitive prop. That importantly includes the `children` prop that most developers use frequently. ',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '84aed07c5940',
    _type: 'block',
    children: [
      {
        _key: '6dde4685e30a',
        _type: 'span',
        marks: [],
        text: '"But can\'t you memoize the prop within the parent component?"',
      },
    ],
    markDefs: [],
    style: 'h2',
  },
  {
    _key: 'e220a5664325',
    _type: 'block',
    children: [
      {
        _key: '0a41d3d008f4',
        _type: 'span',
        marks: [],
        text:
          'One solution to passing non-primitive values as props into our component is to actually memoize them wherever they are defined. ',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: 'a980d5aa87a6',
    _type: 'block',
    children: [
      {
        _key: '212031124437',
        _type: 'span',
        marks: [],
        text:
          'So in the case of a callback, within our parent component we could memoize it like so:',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '3bfd3f7ebcae',
    _type: 'block',
    children: [{ _key: '519448bb9a82', _type: 'span', marks: [], text: '' }],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '4ddbfa6214a6',
    _type: 'code',
    code: 'const handleChange = useCallback((name) => {\n  return name.trim();\n}, [])',
    filename: 'someComponent.js',
    language: 'javascript',
  },
  {
    _key: '655a94b0d75f',
    _type: 'block',
    children: [
      {
        _key: 'b80b60b7feec',
        _type: 'span',
        marks: [],
        text: 'This would make it so if the parent component rerenders, we ',
      },
      { _key: '9f2fe25ec11c', _type: 'span', marks: ['em'], text: "don't" },
      {
        _key: '2e7294b35c2d',
        _type: 'span',
        marks: [],
        text:
          " redefine handleChange and instead return the previously defined version of it, aka we return the same place in memory that it already lived in. Then, when we send it as a prop to our child component, React.memo() would be able to see that the address in memory hasn't changed and so it doesn't need to rerender.",
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '287f8b45d949',
    _type: 'block',
    children: [
      { _key: '5049a8f1c4ef', _type: 'span', marks: [], text: 'Pretty cool...' },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '3b4bc4dcd439',
    _type: 'block',
    children: [
      {
        _key: '5345e76b77ec',
        _type: 'span',
        marks: [],
        text:
          "...but is that something you want to pray every engineer on your team remembers to do? Do you truly believe every single human that has to interact with your codebase will remember to memoize any non-primitive values wherever they're defined so that React.memo's shallow comparison can do its job consistently?",
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '82660e6c3564',
    _type: 'block',
    children: [
      {
        _key: 'a9f5af6f87e6',
        _type: 'span',
        marks: [],
        text:
          "I know the teammates that I've worked with have generally been great people but, just like me, they aren't perfect. If engineers wrote 100% perfect code 100% of the time then we wouldn't have any need for Peer Review.",
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: 'c7cfdc099dee',
    _type: 'block',
    children: [
      {
        _key: '3ffdd9b91c58',
        _type: 'span',
        marks: [],
        text:
          '"Well I can just write a custom comparison function so I don\'t need to worry about my other teammates forgetting to memoize values"',
      },
    ],
    markDefs: [],
    style: 'h3',
  },
  {
    _key: '779c784e8db4',
    _type: 'block',
    children: [
      {
        _key: 'a95d26abaa4d',
        _type: 'span',
        marks: [],
        text:
          'One thing that React.memo allows is a custom callback function that can be invoked to compare the props between rerenders, rather than relying on the default shallow comparison built into the HOC. ',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: 'b2cdf14e693c',
    _type: 'block',
    children: [
      {
        _key: '6a824ed1defa',
        _type: 'span',
        marks: [],
        text:
          'So, in theory, you can just write a custom comparison function to handle comparing non-primitive props, rather than relying on anyone who has to utilize your component memoizing the reference values they pass as props.',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '449cb44354e7',
    _type: 'block',
    children: [
      {
        _key: '11e3ddac856f',
        _type: 'span',
        marks: [],
        text: 'There are two big issues with this approach. ',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '6d58d5bdfe73',
    _type: 'block',
    children: [
      {
        _key: '597e3eb3035d',
        _type: 'span',
        marks: [],
        text:
          "1. You're getting to the point where you're adding a lot of complexity, especially if you need to compare deeply nested objects.",
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '2a1b32c00478',
    _type: 'block',
    children: [
      {
        _key: '79fda29c1341',
        _type: 'span',
        marks: [],
        text:
          "2. Comparisons are not free. One of the reasons React.memo relies on a shallow comparison rather than some crazy catch-all comparison is that a shallow comparison is relatively cheap to perform whereas comparing deeply nested objects is more computationally expensive. So if you define a custom comparison there's a decent chance it's going to be more expensive and you run the risk of a Pyrrhic Victory by gaining a more consistently correct comparison at the cost of worse performance.",
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '5b8e5f78c540',
    _type: 'block',
    children: [
      { _key: '90daba967dab', _type: 'span', marks: [], text: 'Seeing the big picture' },
    ],
    markDefs: [],
    style: 'h4',
  },
  {
    _key: 'ca70fe7c5111',
    _type: 'block',
    children: [
      {
        _key: '1e0d3d6139e4',
        _type: 'span',
        marks: [],
        text: 'As engineers, we should focus first on writing our code so that it is ',
      },
      { _key: 'edc51085a610', _type: 'span', marks: ['em'], text: 'readable ' },
      {
        _key: '44712245c414',
        _type: 'span',
        marks: [],
        text:
          'by other engineers rather than writing significantly more complex code to achieve micro-optimization. ',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: 'c28f70b03043',
    _type: 'block',
    children: [
      {
        _key: '7cb91163c112',
        _type: 'span',
        marks: [],
        text:
          "Even if you managed to write a custom comparison function that makes determining whether to rerender your memoized component more efficient than React's default behavior, there is probably still going to be a tradeoff in readability and/or maintainability of that code down the road. ",
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: 'a2e1008ecebd',
    _type: 'block',
    children: [
      {
        _key: 'fc2dffadbd09',
        _type: 'span',
        marks: [],
        text:
          'And this is already a big "if" anyways -- you\'re far more likely to write a custom comparison function that you ',
      },
      { _key: '332a32ecf24d', _type: 'span', marks: ['em'], text: 'think ' },
      {
        _key: 'acf5ac44fbce',
        _type: 'span',
        marks: [],
        text:
          'is efficient but is actually slowing things down, rather than writing a comparison that truly improves the performance of your app.',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '40fb3f4fd021',
    _type: 'block',
    children: [
      {
        _key: '2000b1e21d2f',
        _type: 'span',
        marks: [],
        text:
          "I'm not saying that you should never define a custom comparison function, but that you need to measure the performance difference between React's default behavior, React.memo's default behavior, and your customized React.memo behavior. If you can conclusively determine that you are seeing a performance benefit, you then need to decide how big that benefit is and whether it is worth the added complexity. ",
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '28aa2c7b005e',
    _type: 'block',
    children: [
      { _key: 'b3dfc4666aea', _type: 'span', marks: [], text: "Don't make assumptions" },
    ],
    markDefs: [],
    style: 'h2',
  },
  {
    _key: '3cfceb578d57',
    _type: 'block',
    children: [
      {
        _key: 'aa3d816d37ba',
        _type: 'span',
        marks: [],
        text:
          'React is fast by default, so any time you start attempting to make it faster with custom logic you should really consider whether you are making things more performant, and at what cost. ',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '5eb48d0dd357',
    _type: 'block',
    children: [
      {
        _key: 'e60577bd90b3',
        _type: 'span',
        marks: [],
        text: 'React.memo exists for a reason. It ',
      },
      { _key: '88c00f37f873', _type: 'span', marks: ['em'], text: 'can' },
      {
        _key: '503adee26a6e',
        _type: 'span',
        marks: [],
        text:
          " improve the performance of your components in certain circumstances. But it's also not the default behavior in React for a reason.",
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '119e914a2ad7',
    _type: 'block',
    children: [
      {
        _key: '0e4d1150b62b',
        _type: 'span',
        marks: [],
        text:
          "If you wrap every component in React.memo, there's a strong chance you'll wind up with a decrease in your performance since a decent chunk of the comparisons done for each memoized component will be unnecessary work. ",
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: 'b7de224ee605',
    _type: 'block',
    children: [
      {
        _key: '944c79177125',
        _type: 'span',
        marks: [],
        text:
          "At the same time, this doesn't mean you should never use React.memo. If you use the React profiler or some other tool and determine that a portion of your app is noticeably slow due to unnecessary rerenders, look at that part of your code and see whether you can wrap it in React.memo to improve the performance. ",
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '30f8641711d2',
    _type: 'block',
    children: [
      {
        _key: 'd4450c5514a8',
        _type: 'span',
        marks: [],
        text:
          'React.memo is not a one-size-fits-all solution, but it is a tool within your toolbox as a React developer that you can utilize intelligently when the situation calls for it.',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
];
