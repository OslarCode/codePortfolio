// src/components/Feature.jsx
import React from "react";
import {
  ChatBubbleOvalLeftIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const Feature = () => {
  return (
    <div className="bg-white">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10 bg-gray-100 dark:bg-gray-800"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="my-3 flex items-center justify-center font-Playfair text-2xl text-gray-800 dark:text-gray-100">
            なぜ私を選ぶのか
          </span>
          <h2 className="text-black font-Playfair text-3xl sm:text-4xl dark:text-gray-100">
            成功を促進する経験、パーソナライゼーション、結果
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl text-center font-Madefor text-gray-600 dark:text-gray-100">
            容ル局6窓どらつか後程めルそ口展ひ業護っまや験見チ向注ユエ麓報マソヒユ豊越ノオエ弱祭フテスヒ嶺件皇ユコモ米3演こー控4侮冗きゆり。丁ソシヱル紙価り果経断ずろ事移指中こる画商なる教安ぎへね政快スくり汰復際京ろ目氏め一験キサトウ必勝ン玉無期熊習ゆ。田ワハニ組気純レクネヒ権氏しリづ校康ナシク下29重ムチワ戦偉づえろぎ営決コヤツロ県能へし定作タ社佐エ陸算幹秋豊らど。
          </p>
        </div>
        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-md border border-black dark:bg-gray-800 dark:border-gray-100 p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border bg-gray-300">
              <ChatBubbleOvalLeftIcon className="w-6 h-6 text-black" />
            </div>
            <h3 className="mt-6 text-black dark:text-gray-100">Mentoría</h3>
            <p className="my-4 mb-0 font-Madefor text-gray-600 dark:text-gray-100">
              容ル局6窓どらつか後程めルそ口展ひ業護っまや験見チ向注ユエ麓報マソヒユ豊越ノオエ弱祭フテスヒ嶺件皇ユコモ米3演こー控4侮冗きゆり。丁ソシヱル紙価り果経断ずろ事移指中こる画商なる教安ぎへね政快スくり汰復際京ろ目氏め一験キサトウ必勝ン玉無期熊習ゆ。田ワハニ組気純レクネヒ権氏しリづ校康ナシク下29重ムチワ戦偉づえろぎ営決コヤツロ県能へし定作タ社佐エ陸算幹秋豊らど。
            </p>
          </div>
          <div className="rounded-md border border-black dark:bg-gray-800 dark:border-gray-100 p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border bg-gray-300">
              <BoltIcon className="w-6 h-6 text-black" />
            </div>
            <h3 className="mt-6 text-black dark:text-gray-100">アップデート</h3>
            <p className="my-4 mb-0 font-Madefor text-gray-600 dark:text-gray-100">
              容ル局6窓どらつか後程めルそ口展ひ業護っまや験見チ向注ユエ麓報マソヒユ豊越ノオエ弱祭フテスヒ嶺件皇ユコモ米3演こー控4侮冗きゆり。丁ソシヱル紙価り果経断ずろ事移指中こる画商なる教安ぎへね政快スくり汰復際京ろ目氏め一験キサトウ必勝ン玉無期熊習ゆ。田ワハニ組気純レクネヒ権氏しリづ校康ナシク下29重ムチワ戦偉づえろぎ営決コヤツロ県能へし定作タ社佐エ陸算幹秋豊らど。
            </p>
          </div>
          <div className="rounded-md border border-black dark:bg-gray-800 dark:border-gray-100 p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border bg-gray-300">
              <WrenchScrewdriverIcon className="w-6 h-6 text-black" />
            </div>
            <h3 className="mt-6 text-black dark:text-gray-100">
              パーソナライズされた
            </h3>
            <p className="my-4 mb-0 font-Madefor text-gray-600 dark:text-gray-100">
              容ル局6窓どらつか後程めルそ口展ひ業護っまや験見チ向注ユエ麓報マソヒユ豊越ノオエ弱祭フテスヒ嶺件皇ユコモ米3演こー控4侮冗きゆり。丁ソシヱル紙価り果経断ずろ事移指中こる画商なる教安ぎへね政快スくり汰復際京ろ目氏め一験キサトウ必勝ン玉無期熊習ゆ。田ワハニ組気純レクネヒ権氏しリづ校康ナシク下29重ムチワ戦偉づえろぎ営決コヤツロ県能へし定作タ社佐エ陸算幹秋豊らど。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
