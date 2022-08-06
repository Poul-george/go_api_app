package main

import (
	"net/http"
	"encoding/json"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

type Book struct {
	Name string
	Author string
	Array any
	Array2 []any
}

var e = createMux()

func main() {
	e.GET("/", articleIndex)
	e.GET("/json", getJson)

	e.Logger.Fatal(e.Start(":1325"))
}

func createMux() *echo.Echo {
	e := echo.New()

	e.Use(middleware.Recover())
	e.Use(middleware.Logger())
	e.Use(middleware.Gzip())

	return e
}

func articleIndex(c echo.Context) error {
	return c.String(http.StatusOK, "hello css html")
}
func getJson(c echo.Context) error {
	s := [...]int{1,2,3,4,5}
	i := [...]int{10,1,2,77,3,4,5}
	book := Book{}
	book.Array = s
	book.Array2 = append(book.Array2, s)
	book.Array2 = append(book.Array2, i)
	book.Name = "C++ programming language"
	book.Author = "Bjarne Stroutsrup"

  res, _ := json.Marshal(book)
	return c.String(http.StatusOK, string(res))
}

//go run main.go
