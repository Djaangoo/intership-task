import { examplePath } from '@paths/example.path';
import { $http } from '@services/http.service';

export type TExampleResponse = { post: number };

export const LikesService = {
  postExample(params: { example1: number; example2: string }) {
    return $http.post<TExampleResponse>(examplePath.example, params).then((response) => response.data);
  },
  getExample() {
    return $http.get<TExampleResponse>(examplePath.example).then((response) => response.data);
  },
};
