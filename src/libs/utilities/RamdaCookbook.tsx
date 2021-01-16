// @ts-nocheck
import * as R from 'ramda';

// this rule set clearly is trying to validate usage of functions starting with "use"

/**
 * SOURCE: https://github.com/ramda/ramda/wiki/Cookbook#diffobjs---diffing-objects-similar-to-guavas-mapsdifference
 */
export const compareObjects = (a: Record<string, any>, b: Record<string, any>): Record<string, any> => {
    // Call groupBy with the object as pairs, passing only the value to the key function
    // eslint-disable-next-line no-underscore-dangle
    const groupObjBy = R.curry(R.pipe(R.useWith(R.groupBy, [R.useWith(R.__, [R.last]), R.toPairs]), R.map(R.fromPairs)));

    const diffObjs = R.pipe(
        R.useWith(R.mergeWith(R.mergeDeepRight), [R.map(R.objOf('leftValue')), R.map(R.objOf('rightValue'))]),
        groupObjBy(R.cond([
            [R.both(R.has('leftValue'), R.has('rightValue')), R.pipe(R.values, R.ifElse(R.apply(R.equals), R.always('common'), R.always('difference')))],
            [R.has('leftValue'), R.always('onlyOnLeft')],
            [R.has('rightValue'), R.always('onlyOnRight')]
        ])),
        R.evolve({
            common: R.map(R.prop('leftValue')),
            onlyOnLeft: R.map(R.prop('leftValue')),
            onlyOnRight: R.map(R.prop('rightValue'))
        })
    );

    return diffObjs(a, b);
};
