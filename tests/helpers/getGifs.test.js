import { getGifs } from '../../src/helpers/getGifs';
import { func } from 'prop-types';

describe('getGifs tests', () => {

    test('should return an array with more than 0 elements', async () => {
        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBeGreaterThan(0);
    });

    test('should return an array of gif objets', async () => {
        const gifs = await getGifs('One Punch');

        expect(gifs[ 0 ]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    });
});