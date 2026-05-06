import allLists from '@/helpers/lists';

describe('army list trait integrity', () => {
  it('every unit trait resolves to a defined string (no undefined)', () => {
    const offenders: string[] = [];
    for (const [periodId, period] of Object.entries(allLists)) {
      for (const [nation, units] of Object.entries(period)) {
        for (const [unitKey, unit] of Object.entries(units)) {
          unit.traits.forEach((trait, index) => {
            if (typeof trait !== 'string' || trait.length === 0) {
              offenders.push(`${periodId} > ${nation} > ${unitKey} > traits[${index}] = ${String(trait)}`);
            }
          });
        }
      }
    }
    expect(offenders).toEqual([]);
  });
});
