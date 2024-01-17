import { Tuple } from "@src/types/utility";
import { UUID } from "crypto";
import { Socket } from "socket.io-client";

type Player = {
  socketID: Socket["id"];
  playerName: string;
  remainSeconds: number;
};

type WaitingPlayer = {
  socketID: Socket["id"];
  playerName: string;
};

export type PlayerCount = 2 | 3 | 4;

type RoomData = {
  roomID: UUID | null;
  playerCount: PlayerCount | null;
  playerList: WaitingPlayer[];
};

type GameData = {
  topSlider: { progress: number; prevProgress: number };
  sideSlider: { progress: number; prevProgress: number };
  board: Tuple<Tuple<-2 | -1 | 0 | 1 | 2 | 3, 8>, 8>;
  playerList: Player[];
  whoseTurn: 0 | 1 | 2 | 3;
};

export type State = {
  playerName: string;
  isInRoom: boolean;
  roomData: RoomData;
  isInGame: boolean;
  gameData: GameData;
};
