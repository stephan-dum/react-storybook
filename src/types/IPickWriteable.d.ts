// https://github.com/Microsoft/TypeScript/issues/27024#issuecomment-421529650
type IfEquals<A, B, Then, Else> = (
  (<T>() => T extends A ? 1 : 2) extends
    (<T>() => T extends B ? 1 : 2)
    ? Then
    : Else
  );

type WritableKeysOf<Type> = {
  [Key in keyof Type]: IfEquals<
    { [Mode in Key]: Type[Key] },
    { -readonly [Mode in Key]: Type[Key] },
    Key,
    never
    >
}[keyof Type];

type PickWritable<T> = Pick<T, WritableKeysOf<T>>;

export default PickWritable;
