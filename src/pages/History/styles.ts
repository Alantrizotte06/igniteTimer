import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 1.5rem 3.5rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  /* margin-bottom: 4rem; */

  &::-webkit-scrollbar {
    background: ${(props) => props.theme["gray-800"]};
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme["gray-600"]};
    border-radius: 0.5rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    margin-bottom: 3.5rem;

    thead {
      position: sticky;
      top: 0;
      background-color: ${(props) => props.theme["gray-600"]};
    }

    th {
      background-color: ${(props) => props.theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme["gray-700"]};
      border-top: 4px solid ${(props) => props.theme["gray-800"]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

const STATUS_COLORS = {
  yellow: "yellow-500",
  green: "green-500",
  red: "red-500",
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`;
