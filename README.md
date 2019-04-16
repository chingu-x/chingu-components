# Chingu Components

[https://bit.dev/chingu/web](https://bit.dev/chingu/web)

The repository for Chingu FE compinents.

### Add a new component

For Bit to start tracking changes to a new component, you must first "add" it. To add a component you need to tell Bit where it is and what to call it.

```bash
bit add src/components/path/to/component --id namespace/name-of-component
# e.g.
bit add src/components/UI/Input/Text --id ui/input/text
```

Now Bit is tracking the new `text` component in the `ui/input` namespace.

### Tag a component

To tag a component for the first time you can do the following:

```bash
bit tag namespace/name-of-component 1.0.0
# e.g.
bit tag ui/input/text 1.0.0
```

This will mark the component as being version `1.0.0`.

When you want to publish new versions of a component, you must first update its version. A components version is broken into three separate sections:

- The "Major" version number: The `1` in `1.0.0`. You only change this number if you have made a "breaking" change to the component.
- The "Minor" version number: The first `0` in `1.0.0`. You change this number if you add new functionality/features in a non-breaking way.
- The "Patch" version number: The second `0` in `1.0.0`. You change this number whenever you fix bugs or add patches.

To update the version of a component, you can do the following:

```bash
# To update the "Major" version
bit tag --major namespace/name-of-component
# e.g.
bit tag --major ui/input/text

# To update the "Minor" version
bit tag --minor namespace/name-of-component
# e.g.
bit tag --minor ui/input/text

# To update the "Patch" version
bit tag --patch namespace/name-of-component
# e.g.
bit tag --patch ui/input/text
```

Then you just need to export the component.

### Export a component

To publish a new component or any changes you have made to Bit, you use the `export` command.

```bash
bit export chingu.web namespace/name-of-component
# e.g.
bit export chingu.web ui/input/text

# OR export everything that has changed:
bit export chingu.web
```

### Importing changes

To avoid conflicts, you should import the component objects from bit regularly:

```bash
bit import
```