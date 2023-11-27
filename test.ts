export type FirstExpression<X> = <T>() => T extends X ? 1 : 2;
export type SecondExpression<Y> = <P>() => P extends Y ? 1 : 2;
export type Equal<X, Y> = FirstExpression<X> extends SecondExpression<Y> ? true : false;

type A = number | string;
type B = number;


type C = Equal<{ a: 3 }, { a: 3; b: 5 }>
type D = Equal<{ a: 3, b: 5 }, { a: 3 }>;

type E = Equal<1 | 2, 1>;
type F = Equal<1, 1 |2>;

type G = Equal<1, 1>
