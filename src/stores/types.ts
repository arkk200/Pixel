import { Tuple } from "@src/types/utility";
import { Socket } from "socket.io-client";

type Player = {
  socketID: Socket["id"];
  playerName: string;
  remainSeconds: number;
};

type GameData = {
  topSlider: { progress: number; prevProgress: number };
  sideSlider: { progress: number; prevProgress: number };
  board: Tuple<Tuple<-2 | -1 | 0 | 1 | 2 | 3, 8>, 8>;
  playerList: Player[];
  whoseTurn: 0 | 1 | 2 | 3;
};

export type State = {
  gameData: GameData;
  isInGame: boolean;
  playerName: string;
};
