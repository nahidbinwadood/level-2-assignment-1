{
  // Problem:01:==>
  function formatString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
  }

  // Problem:02:==>
  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items?.filter(
      (i: { title: string; rating: number }) => i.rating >= 4
    );
  }
  const books1 = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
    { title: 'Book D', rating: 2.9 },
  ];
  const books2 = [
    { title: 'Book X', rating: 1.0 },
    { title: 'Book Y', rating: 2.5 },
    { title: 'Book Z', rating: 3.9 },
  ];
  const books3 = [
    { title: 'Book L', rating: 4.0 },
    { title: 'Book M', rating: 4.2 },
    { title: 'Book N', rating: 4.8 },
  ];
  const books4 = [
    { title: 'Book P', rating: 4.0 },
    { title: 'Book Q', rating: 3.99 },
    { title: 'Book R', rating: 4.01 },
  ];

  // Problem:03:==>
}
