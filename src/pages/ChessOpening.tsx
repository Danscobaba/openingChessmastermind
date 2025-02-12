import React, { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import {
  Book,
  RotateCcw,
  FlipHorizontal,
  Play,
  AlertCircle,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// TypeScript interfaces for opening data
interface CommonMistake {
  position: string;
  mistake: string;
  correct: string;
  explanation: string;
}

interface Variation {
  moves: string[];
  ideas: string[];
  commonMistakes: CommonMistake[];
}

interface Opening {
  moves: string[];
  variations: Record<string, Variation>;
  evaluation: {
    initial: number;
    afterMistake: number;
  };
}

// Expanded openings database
const openingsDatabase: Record<string, Opening> = {
  "Ruy Lopez": {
    moves: ["e4", "e5", "Nf3", "Nc6", "Bb5"],
    variations: {
      "Main Line": {
        moves: ["e4", "e5", "Nf3", "Nc6", "Bb5"],
        ideas: [
          "Control the center",
          "Develop knights and bishops",
          "Prepare for castling",
        ],
        commonMistakes: [
          {
            position:
              "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
            mistake: "Nd4",
            correct: "a6",
            explanation:
              "Nd4 looks tempting but after Nxe5, Black loses control of the center.",
          },
        ],
      },
    },
    evaluation: {
      initial: 0.2,
      afterMistake: 1.5,
    },
  },
  "Sicilian Defense": {
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4"],
    variations: {
      "Main Line": {
        moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4"],
        ideas: ["Control the center", "Prepare for a kingside attack"],
        commonMistakes: [
          {
            position:
              "rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
            mistake: "Nf6",
            correct: "cxd4",
            explanation:
              "Black should capture the pawn immediately to avoid losing control of the center.",
          },
        ],
      },
    },
    evaluation: {
      initial: 0.3,
      afterMistake: -0.8,
    },
  },
};

// Main ChessOpening Component
const ChessOpening: React.FC = () => {
  const [game, setGame] = useState(new Chess());
  const [selectedOpening, setSelectedOpening] = useState<string>("");
  const [selectedVariation, setSelectedVariation] = useState<string>("");
  const [isPracticeMode, setIsPracticeMode] = useState(false);
  const [currentMistake, setCurrentMistake] = useState<CommonMistake | null>(
    null
  );
  const [message, setMessage] = useState<{
    type: "info" | "success" | "error";
    text: string;
  } | null>(null);
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [optionSquares, setOptionSquares] = useState<Record<string, any>>({});
  const [boardWidth, setBoardWidth] = useState(600); // Resizable board width

  // Safely mutate the game state
  const safeGameMutate = (modify: (game: Chess) => void) => {
    setGame((g) => {
      const update = new Chess(g.fen());
      modify(update);
      return update;
    });
  };

  // Handle move drop on the board
  const onDrop = (sourceSquare: string, targetSquare: string) => {
    let move = null;
    safeGameMutate((game: Chess) => {
      move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q", // Always promote to queen for simplicity
      });
    });

    if (!move) {
      setMessage({ type: "error", text: "Invalid move. Try again." });
      return false;
    }

    if (isPracticeMode && currentMistake) {
      if (move.san === currentMistake.correct) {
        setMessage({
          type: "success",
          text: `Correct! ${currentMistake.explanation}`,
        });
      } else {
        setMessage({
          type: "error",
          text: `Try again. The best move is ${currentMistake.correct}.`,
        });
      }
    }

    setSelectedSquare(null); // Clear selected square after move
    setOptionSquares({}); // Clear possible moves after move
    return true;
  };

  // Handle square click for move selection
  const onSquareClick = (square: string) => {
    if (selectedSquare === square) {
      // Deselect the square if clicked again
      setSelectedSquare(null);
      setOptionSquares({});
      return;
    }

    const piece = game.get(square);
    if (piece && piece.color === game.turn()) {
      // If a piece of the current player's color is clicked, show possible moves
      setSelectedSquare(square);
      const moves = game.moves({ square, verbose: true });
      const newSquares: Record<string, any> = {};
      moves.forEach((move) => {
        newSquares[move.to] = {
          background: "rgba(255, 215, 0, 0.3)", // Gold highlight for possible moves
          borderRadius: "50%",
        };
      });
      setOptionSquares(newSquares);
    } else if (selectedSquare) {
      // If a target square is clicked, attempt to move the selected piece
      onDrop(selectedSquare, square);
    }
  };

  // Reset the board to its initial state
  const resetBoard = () => {
    setGame(new Chess());
    setIsPracticeMode(false);
    setCurrentMistake(null);
    setMessage(null);
    setSelectedSquare(null);
    setOptionSquares({});
  };

  // Start learning mode (follow mainline moves)
  const startLearningMode = () => {
    if (!selectedOpening || !selectedVariation) return;

    setIsPracticeMode(false);
    const variation = openingsDatabase[selectedOpening].variations[
      selectedVariation
    ];
    const newGame = new Chess();
    variation.moves.forEach((move) => newGame.move(move));
    setGame(newGame);
    setMessage({
      type: "info",
      text: "Follow the mainline moves of the opening.",
    });
  };

  // Start practice mode (solve common mistakes)
  const startPracticeMode = () => {
    if (!selectedOpening || !selectedVariation) return;

    setIsPracticeMode(true);
    const variation = openingsDatabase[selectedOpening].variations[
      selectedVariation
    ];
    const mistake = variation.commonMistakes[0];
    const newGame = new Chess(mistake.position);
    newGame.move(mistake.mistake); // Introduce the mistake
    setGame(newGame);
    setCurrentMistake(mistake);
    setMessage({
      type: "info",
      text: "Find the best move to punish the computer's mistake!",
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8 max-w-7xl mx-auto bg-white text-black">
      <h1 className="text-3xl font-bold">Chess Opening Trainer</h1>

      {/* Opening Selection */}
      <div className="flex gap-4">
        <Select
          value={selectedOpening}
          onValueChange={(value) => setSelectedOpening(value as string)}
        >
          <SelectTrigger className="w-[200px] bg-blue-500 text-white">
            <SelectValue placeholder="Select an opening..." />
          </SelectTrigger>
          <SelectContent className="bg-blue-500 text-white">
            {Object.keys(openingsDatabase).map((opening) => (
              <SelectItem key={opening} value={opening}>
                {opening}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {selectedOpening && (
          <Select
            value={selectedVariation}
            onValueChange={(value) => setSelectedVariation(value as string)}
          >
            <SelectTrigger className="w-[200px] bg-blue-500 text-white">
              <SelectValue placeholder="Select a variation..." />
            </SelectTrigger>
            <SelectContent className="bg-blue-500 text-white">
              {Object.keys(
                openingsDatabase[selectedOpening].variations
              ).map((variation) => (
                <SelectItem key={variation} value={variation}>
                  {variation}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>

      {/* Mode Buttons */}
      <div className="flex gap-4">
        <Button
          onClick={startLearningMode}
          disabled={!selectedVariation}
          className="bg-blue-500 text-white hover:bg-blue-600"
        >
          <Play className="mr-2 h-4 w-4" />
          Learning Mode
        </Button>
        <Button
          onClick={startPracticeMode}
          disabled={!selectedVariation}
          className="bg-blue-500 text-white hover:bg-blue-600"
        >
          Practice Mode
        </Button>
        <Button
          onClick={resetBoard}
          className="bg-white text-blue-500 border-blue-500 hover:bg-gray-100"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset Board
        </Button>
      </div>

      {/* Chessboard */}
      <div className="w-full max-w-[600px] mx-auto">
        <Chessboard
          position={game.fen()}
          onDrop={onDrop}
          onSquareClick={onSquareClick}
          customBoardStyle={{
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          customDarkSquareStyle={{ backgroundColor: "#0000FF" }} // Blue squares
          customLightSquareStyle={{ backgroundColor: "#FFD7FF" }} // Pink squares
          customSquareStyles={{
            ...optionSquares,
          }}
          boardWidth={boardWidth}
        />
      </div>

      {/* Messages and Alerts */}
      {message && (
        <Alert variant={message.type === "error" ? "destructive" : "default"}>
          <AlertDescription>{message.text}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default ChessOpening;