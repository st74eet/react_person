export const Person = ({ person }) => {
  let marriage = 'I am not married';

  if (person.sex === 'm') {
    marriage = 'wife';
  }

  if (person.sex === 'f') {
    marriage = 'husband';
  }

  return (
    <>
      <section className="Person" />
      <h2 className="Person__name">My name is {person.name}</h2>
      <p
        className="Person__age"
        style={{
          display: person.age ? 'visible' : 'none',
        }}
      >
        I am
        {person.age}
      </p>
      <p className="Person__partner">
        {person.partner}
        is my
        {marriage}
      </p>
      <section />
    </>
  );
};
