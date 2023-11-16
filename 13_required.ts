interface Profile {
  name?: string;
  age?: number;
  married?: boolean;
}

type Name = Profile['name'];
