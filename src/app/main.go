package main

import (
	"os"
	"fmt"
	"log"
	"net"
	"bufio"
)

func getString(str string) string {
	return str + "\r\n"
}

func main() {
	port := os.Getenv("PORT")

	ln, err := net.Listen("tcp", ":" + port)
	logPanic(err)

	for {
		conn, err := ln.Accept()
		logPanic(err)
		go handle(conn)
	}
}

func logPanic(err error) {
	if err != nil {
		log.Panic(err)
	}
}

func handle(conn net.Conn) {
	defer conn.Close()

	scanner := bufio.NewScanner(bufio.NewReader(conn))

	for scanner.Scan() {
		line := ""

		if line = scanner.Text(); line == "" {
			break
		}

		log.Println(line)
	}

	fmt.Fprintf(conn, getFirstLine())
	fmt.Fprintf(conn, getContentType())
	fmt.Fprintf(conn, getString(""))
	fmt.Fprintf(conn, getString(""))
}

func getFirstLine() string {
	return getString("HTTP/1.1 200 OK")
}

func getContentType() string {
	return getString("Content-Type: text/html")
}
