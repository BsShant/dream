import React from "react";
import PrivateLayout from "../Layout/PrivateLayout/Index";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Dashboard from "../ProtoctedPages/Dashboard/Dashboard";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  Router,
} from "react-router-dom";
import ReadAloud from "../ProtoctedPages/ReadAloud/ReadAloud";
import RepeatSentence from "../ProtoctedPages/RepeatSentence/RepeatSentence";
import DescribeImage from "../ProtoctedPages/DescribeImage/DescribeImage";
import ReTellLecture from "../ProtoctedPages/ReTellLecture/ReTellLecture";
import AnswerShortQuestion from "../ProtoctedPages/AnswerShortQuestion/AnswerShortQuestion";
import SummarizeText from "../ProtoctedPages/SummarizeText/SummarizeText";
import WriteEssay from "../ProtoctedPages/WriteEssay/WriteEssay";
import FillInTheBlanks from "../ProtoctedPages/FillInTheBlanks/FillInTheBlanks";
import MCQ from "../ProtoctedPages/MCQ/MCQ";
import ReorderParagraph from "../ProtoctedPages/ReorderParagraph/ReorderParagraph";
import SelectBestWord from "../ProtoctedPages/SelectBestWord/SelectBestWord";
import ChooseSingleAnswer from "../ProtoctedPages/ChooseSingleAnswer/ChooseSingleAnswer";
import SummarizeSpokenText from "../ProtoctedPages/SummarizeSpokenText/SummarizeSpokenText";
import ListeningMultipleAnswers from "../ProtoctedPages/ListeningMultipleAnswers/ListeningMultipleAnswers";
import ListeningFillInTheBlanks from "../ProtoctedPages/ListeningFillInTheBlanks/ListeningFillInTheBlanks";
import HighlightCorrectSummary from "../ProtoctedPages/HighlightCorrectSummary/HighLightCorrectSummary";
import HighlightIncorrectWords from "../ProtoctedPages/HighlightIncorrectWords/HighlightIncorrectWords";
import WriteFromDictation from "../ProtoctedPages/WriteFromDictation/WriteFromDictation";
import ListeningSingleAnswer from "../ProtoctedPages/ListeningSingleAnswers/ListeningSingleAnswers";
import VideoLessons from "../ProtoctedPages/VideoLessonsPage/VideoLessons.tsx/VideoLessons";
import MaterialDownload from "../ProtoctedPages/MaterialDownload/MaterialDownload";
import MockTest from "../ProtoctedPages/MockTest/MockTest";
import VideoPage from "../ProtoctedPages/VideoPage/VideoPage";
const IndexRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",

      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/practice/dashboard",
          element: (
            <PrivateLayout>
              <Dashboard />
            </PrivateLayout>
          ),

        },
        {
          path: "/practice/video-lessons",
          element: (
            <PrivateLayout>
              <VideoLessons />
            </PrivateLayout>
          ),
        },
        {
          path: "/practice/video-lessons/video-player",
          element:
            <PrivateLayout>
              <VideoPage />
            </PrivateLayout>
        },
        {
          path: "/practice/pte-speaking/read-aloud",
          element:
            <PrivateLayout>
              <ReadAloud />
            </PrivateLayout>
        },
        {
          path: "/practice/pte-speaking/repeat-sentence",
          element:
            <PrivateLayout>
              <RepeatSentence />
            </PrivateLayout>
        },
        {
          path: "/practice/pte-speaking/describe-image",
          element:
            <PrivateLayout>
              <DescribeImage />
            </PrivateLayout>
        },
        {
          path: "/practice/pte-speaking/re-tell-lecture",
          element:
            <PrivateLayout>
              <ReTellLecture />
            </PrivateLayout>
        },
        {
          path: "/practice/pte-speaking/answer-short-question",
          element:
            <PrivateLayout>
              <AnswerShortQuestion />
            </PrivateLayout>
        },
        {
          path: "/practice/pte-writing/summarize-written-text",
          element:
            <PrivateLayout>
              <SummarizeText />
            </PrivateLayout>
        },
        {
          path: "/practice/pte-writing/write-essay",
          element:
            <PrivateLayout>
              <WriteEssay />
            </PrivateLayout>
        },
        {
          path: "/practice/pte-reading/fill-in-the-blanks",
          element:
            <PrivateLayout>
              <FillInTheBlanks />
            </PrivateLayout>
        },
        {
          path: "/practice/pte-reading/m-c-q",
          element:
            <PrivateLayout>
              <MCQ />
            </PrivateLayout>
        },
        {
          path: "/practice/pte-reading/choose-single-answer",
          element:
            <PrivateLayout>
              <ChooseSingleAnswer />
            </PrivateLayout>
        },
        {
          path: "/practice/pte-reading/re-order-paragraphs",
          element:
            <PrivateLayout>
              <ReorderParagraph />
            </PrivateLayout>
        },
        {
          path: "/practice/pte-reading/select-best-word",
          element:
            <PrivateLayout>
              <SelectBestWord />
            </PrivateLayout>
        },
        {
          path: "/practice/pte-listening/summarize-spoken-text",
          element:
            <PrivateLayout>
              <SummarizeSpokenText />
            </PrivateLayout>
        },
        {
          path: "/practice/pte-listening/choose-multiple-answer",
          element:
            <PrivateLayout>
              <ListeningMultipleAnswers />
            </PrivateLayout>
        },
        {
          path: "/practice/pte-listening/choose-single-answer",
          element:
            <PrivateLayout>
              <ListeningSingleAnswer />
            </PrivateLayout>
        },
        {
          path: "/practice/pte-listening/fill-in-the-blanks",
          element:
            <PrivateLayout>
              <ListeningFillInTheBlanks />
            </PrivateLayout>
        },
        {
          path: "/practice/pte-listening/highlight-correct-summary",
          element:
            <PrivateLayout>
              <HighlightCorrectSummary />
            </PrivateLayout>
        },
        {
          path: "/practice/pte-listening/highlight-incorrect-words",
          element:
            <PrivateLayout>
              <HighlightIncorrectWords />
            </PrivateLayout>
        },
        {
          path: "/practice/pte-listening/write-from-dictation",
          element:
            <PrivateLayout>
              <WriteFromDictation />
            </PrivateLayout>
        },
        {
          path: "/practice/pte-mock-test",
          element:
            <PrivateLayout>
              <MockTest />
            </PrivateLayout>
        },
        {
          path: "/practice/material-download",
          element:
            <PrivateLayout>
              <MaterialDownload />
            </PrivateLayout>
        },
      ],



    },

  ]);
  return <RouterProvider router={router} />;
};

export default IndexRoutes;
